# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/)  
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [1.4.0] - 2025-12-01
### Added
- ✨ Added **Advanced Teacher Search & Filter** feature enabling students to find the best teachers based on:
    - subject
    - rating
    - price range
    - availability
    - teaching method (online / offline)
- Added backend API endpoints for the new search engine:
    - `GET /teachers/search`
    - `POST /teachers/filter`
- Added new database indexes to improve search performance.

### Changed
- Improved the search response DTO structure to support multiple filter categories.
- Updated UI component for search bar with modern UX improvements.

### Fixed
- Fixed the issue where the search results were not sorted by rating properly.
- Fixed missing translation keys for filter labels.

---

## [1.3.0] - 2025-11-21
### Added
- Added **Class Attendance History & Archive** system for students.
- New endpoints:
    - `GET /classes/history`
    - `GET /classes/{id}/attendance`
- Added local cache to improve load time.

---

## [1.2.1] - 2025-11-10
### Fixed
- Fixed incorrect time formatting in class schedule pages.