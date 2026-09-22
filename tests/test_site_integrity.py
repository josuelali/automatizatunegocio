from html.parser import HTMLParser
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]

class Refs(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        for key in ("href", "src"):
            if key in values:
                self.refs.append(values[key])

class SiteIntegrityTests(unittest.TestCase):
    def test_home_has_six_real_editorial_cards(self):
        home = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertEqual(home.count('class="post-card"'), 6)
        self.assertEqual(home.count('class="category-chip"'), 6)
        for name in ("guia-ia.svg", "guia-email.svg", "guia-captacion.svg",
                     "guia-whatsapp.svg", "guia-formularios.svg", "guia-crm.svg"):
            self.assertIn(name, home)
            self.assertTrue((ROOT / "assets" / "img" / name).exists())

    def test_consent_defaults_are_fail_closed(self):
        js = (ROOT / "assets" / "js" / "consent-init.js").read_text(encoding="utf-8")
        for key in ("analytics_storage", "ad_storage", "ad_user_data", "ad_personalization"):
            self.assertIn(key + ": 'denied'", js)
        self.assertIn("CONSENT_MODE_DATA_READY", js)
        self.assertIn("gtag_enable_tcf_support = true", js)
        self.assertIn("CONSENT_API_READY", js)
        self.assertIn("vendors['755']", js)
        self.assertIn("G-H2QTH54RLR", js)

    def test_google_order_on_atn_pages(self):
        for page in ROOT.rglob("*.html"):
            if "sistema-maestro-ia" in page.parts:
                continue
            html = page.read_text(encoding="utf-8")
            consent = html.index("consent-init.js")
            adsense = html.index("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")
            self.assertLess(consent, adsense, page)

    def test_internal_references_exist(self):
        missing = []
        for page in ROOT.rglob("*.html"):
            if "sistema-maestro-ia" in page.parts:
                continue
            parser = Refs()
            parser.feed(page.read_text(encoding="utf-8"))
            for ref in parser.refs:
                if not ref or ref.startswith(("#", "http:", "https:", "mailto:", "tel:", "data:", "//")):
                    continue
                clean_ref = ref.split("?", 1)[0]
                target = (ROOT / clean_ref.lstrip("/")) if clean_ref.startswith("/") else (page.parent / clean_ref)
                target = target.resolve()
                if clean_ref.endswith("/"):
                    target = target / "index.html"
                if not target.exists():
                    missing.append((str(page.relative_to(ROOT)), ref))
        self.assertEqual(missing, [])

if __name__ == "__main__":
    unittest.main(verbosity=2)
