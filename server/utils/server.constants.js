exports.MESSAGES = {
  ACCOUNT_CREATED:        "Your account has been successfully created.",
  EMAIL_ALREADY_EXIST:    "An account with that email already exists.",
  FIELDS_MISSING:         "Please fill in all fields.",
  INTERNAL_SERVER_ERROR:  "An unexpected error occurred.",
  INVALID_CREDENTIALS:    "Invalid username or password.",
  INVALID_GITHUB_LINK:    "Invalid github link provided.",
  INVALID_PROJECT_FIELDS: "Invalid project field or fields.",
  PROJECT_ALREADY_EXIST:  "A project with that name already exist.",
  PROJECT_CREATED:        "Project has been created",
  PROJECT_DOES_NOT_EXIST: "A project with that name doesn't exist.",
  PROJECT_UPDATED:        "Project updated successfully.",
  NOT_LOGGED_IN:          "You must be logged in.",
  NOT_FOUND_OR_PRIVATE:   "Error: Unable to access repository. Please verify repository URL or contact owner"
};

exports.HTTP_STATUS_CODES = {
  OK : 200,
  UNAUTHORIZED : 401,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY : 422,
  INTERNAL_SERVER_ERROR : 500
};

exports.SEMESTER = [
  "Spring",
  "Summer",
  "Fall"
]