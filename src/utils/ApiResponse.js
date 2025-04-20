class ApiResponse {
  constructor(statusCode, data, message = "success") {
    this.statusCode = statusCode; // HTTP status code (e.g., 200, 404, 500)
    this.data = data; // Data to be returned in the response
    this.message = message; // Message describing the response
    this.success = statusCode < 400; // Indicates if the response is successful (status code < 400)
  }
}

export { ApiResponse };
