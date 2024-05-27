const fs = require('fs');

const DEFAULT_ERROR_MESSAGE = 'Internal server error';

class JsonReader {
  constructor(filePath) {
    this.filePath = filePath;
  }

  readJson() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, (err, data) => {
        if (err) {
          reject(err);
        } else {
          try {
            const jsonData = JSON.parse(data);

            resolve(jsonData);
          } catch (parseError) {
            reject(parseError);
          }
        }
      });
    });
  }

  generateError(err, errorMessage = DEFAULT_ERROR_MESSAGE) {
    return {
      ...err,
      error: { message: errorMessage },
    };
  }
}

module.exports = JsonReader;
