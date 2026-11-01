CREATE TABLE IF NOT EXISTS cv_requests (
  id TEXT PRIMARY KEY,
  requested_at TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  contact_consent INTEGER NOT NULL CHECK (contact_consent IN (0, 1)),
  consent_text TEXT NOT NULL,
  privacy_notice_version TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS cv_requests_requested_at ON cv_requests(requested_at);
