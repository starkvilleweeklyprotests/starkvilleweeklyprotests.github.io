function doGet() {
  // Replace with your actual sheet name
  var sheetName = getTodayFormatted();  

  // Open the spreadsheet and get the sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);

  // Get the data range for each column (assuming 3 columns, A–C) (subtract 1 for the headers)
  var col1 = sheet.getRange("A:A").getValues().filter(String).length-1;
  var col2 = sheet.getRange("B:B").getValues().filter(String).length-1;
  var col3 = sheet.getRange("C:C").getValues().filter(String).length-1;

  // Build the JSON object (replace keys with your field names)
  var result = {
    "positive": col1,
    "negative": col2,
    "attendance": col3
  };

  // Return JSON response
  return ContentService
           .createTextOutput(JSON.stringify(result))
           .setMimeType(ContentService.MimeType.JSON);
}