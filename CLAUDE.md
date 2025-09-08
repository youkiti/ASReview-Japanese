# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Python Backend Setup
```bash
# Install in development mode
pip install -e ".[dev]"

# Run Flask development server (from asreview/webapp)
cd asreview/webapp
flask run --debug

# Run task manager (required for AI model processing)
asreview task-manager --verbose

# Run tests
pytest tests/

# Lint and format Python code
ruff check .
ruff format .
```

### Frontend Setup (React)
```bash
# Install dependencies (from asreview/webapp)
cd asreview/webapp
npm ci

# Run development server (opens on localhost:3000)
npm start

# Build production version
npm build

# Format frontend code
npx prettier --write .
```

### Full Development Setup
Requires 3 simultaneous terminals:
1. Flask server: `cd asreview/webapp && flask run --debug`
2. Task manager: `asreview task-manager --verbose`
3. React dev server: `cd asreview/webapp && npm start`

### Testing
```bash
# Run core tests
pytest tests/

# Run with coverage
pytest --cov=asreview tests/

# Integration tests (excluded by default)
pytest asreview/webapp/tests/integration_tests/
```

## Architecture Overview

### Core Components

**ASReview Core** (`/asreview/`)
- Active learning engine for systematic reviews
- Plugin-based architecture for models (classifiers, feature extractors, balancers, queriers)
- Entry points system for extensibility via `pyproject.toml`
- State management for review progress tracking
- Data handling for various formats (CSV, RIS, Excel)

**Web Application** (`/asreview/webapp/`)
- React frontend (MUI components) in `/src/`
- Flask backend API in `/_api/`
- Authentication system in `/_authentication/`
- Task manager for async model processing in `/_task_manager/`
- WebSocket support for real-time updates

### Key Model Architecture
- **Classifiers**: SVM, Naive Bayes, Random Forest, Logistic Regression
- **Feature Extractors**: TF-IDF, One-Hot encoding
- **Balancers**: Handle class imbalance in training data
- **Queriers**: Active learning strategies (Random, Max, Uncertainty, Hybrids)
- **Stoppers**: Criteria for stopping review process

Models are registered via entry points in `pyproject.toml` and can be extended through plugins.

### Data Flow
1. User uploads dataset → Processed by data readers
2. User labels records → Stored in project state
3. Task manager triggers model retraining
4. Learner uses labeled data to train active learning model
5. Model predicts relevance scores for unlabeled records
6. Frontend displays next records prioritized by model

### Project Structure
- Projects stored as `.asreview` files (SQLite databases)
- State management tracks labeling decisions, model states, and review progress
- Support for collaborative screening via ASReview LAB Server

## Important Configuration

### Environment Variables
- `ASREVIEW_LAB_AUTHENTICATION`: Enable authentication (development)
- `ASREVIEW_LAB_CONFIG_PATH`: Path to TOML config file
- `FLASK_ALLOWED_ORIGINS`: CORS configuration for development
- `REACT_APP_API_URL`: Backend URL for frontend (default: http://localhost:5000)
- `REACT_APP_AUTHENTICATION`: Enable auth in frontend

### Port Defaults
- Flask API: 5000
- Task Manager: 5101  
- React Dev Server: 3000

## Key Files to Understand

- `/asreview/learner.py`: Core active learning implementation
- `/asreview/webapp/app.py`: Flask application setup
- `/asreview/webapp/_api/`: REST API endpoints
- `/asreview/webapp/src/App.js`: React app entry point
- `/asreview/models/`: Model implementations
- `/pyproject.toml`: Package configuration and entry points

## Japanese Localization Plan (ASReview-Japanese Fork)

This fork focuses on complete UI Japanese localization while maintaining code integrity.

### Localization Scope

**Target for Japanese Translation:**
- React UI components: Button labels, form fields, messages, headers
- Backend API error messages visible to users
- HTML metadata: page titles, descriptions
- Help/FAQ content in help.json
- Offline page instructions

**NOT to be translated (Safety):**
- Variable names, function names, API endpoints
- Developer comments and logs
- Configuration keys
- Database schema names

### Implementation Phases

#### Phase 1: Direct Japanese Hardcoding
- No i18n library needed - direct string replacement approach
- Replace English hardcoded strings with Japanese equivalents
- Maintain code structure and variable names unchanged

#### Phase 2: Frontend Components (Priority Order)
1. **Authentication**: SignInForm, SignUpForm, AuthPage
2. **Review Interface**: ReviewPage, RecordCard, StoppingDialog
3. **Project Management**: ProjectsOverview, ProjectCard, DashboardHeader
4. **Settings**: SettingsDialog, HelpPopover, ProfilePage
5. **Admin Interface**: Overview, UsersComponent, TrainingQueue

#### Phase 3: Backend Localization
- Direct replacement of user-facing error messages in `_api/` modules
- No Flask-Babel needed - simple string replacement
- Maintain API response structure unchanged

#### Phase 4: Metadata & Documentation
- Replace HTML title/meta content with Japanese
- Replace help.json content with Japanese
- Update README with fork information
- No language switcher needed - Japanese only

### Development Notes

- Direct hardcoded string replacement approach
- No translation system needed - pure Japanese localization
- Test all UI flows after string replacement
- Keep API response structure unchanged
- Preserve all variable names and technical terms in English
- Replace only user-visible strings, not code identifiers