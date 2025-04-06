class ApiResponse {
  constructor(statusCode, message = "success", data) {
    this.statusCode = statusCode; // HTTP status code (e.g., 200, 404, 500)
    this.message = message; // Message describing the response
    this.data = data; // Data to be returned in the response
    this.success = statusCode < 400; // Indicates if the response is successful (status code < 400)
  }
}