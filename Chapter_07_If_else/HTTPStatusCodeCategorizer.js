let HTTP_status_code = 404;

if (HTTP_status_code >= 200 && HTTP_status_code <= 299) {
    console.log(HTTP_status_code + " success")
}
else if (HTTP_status_code >= 300 && HTTP_status_code <= 399) {
    console.log(HTTP_status_code + "  Redirection")
}
else if (HTTP_status_code >= 400 && HTTP_status_code <= 499) {
    console.log(HTTP_status_code + "  Client Error")
}
else if (HTTP_status_code >= 500 && HTTP_status_code <= 599) {
    console.log(HTTP_status_code + "  Server Error")
}
else {
    console.log(HTTP_status_code + "  is Invalid")
}