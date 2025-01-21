// contains functions that handle the encryption
import { symbolRegex, symbolArray } from "../config/constants";

/*
     ENCRYPTER
    1    2    3
   ...  abc  def

    4    5    6
   ghi  jkl  mno

    7    8    9
   pqrs tuv  wxyz

         0
       space
*/
/**
 * Converts character to lowercase and removes trailing whitespace.
 * @param {string} text
 * @returns string
 */
function normalise(text) {
  text = text.toLowerCase();
  text = text.trimEnd();
  return text;
}

function convertToNums(char) {
  let convertedChar = {
    character: "",
    key: null,
  };

  console.log(`char is: ${char}`);
  switch (char) {
    case undefined:
      convertedChar = {
        character: undefined,
        key: 404,
      };
    case "a":
      convertedChar = {
        character: "2",
        key: 2,
      };
      break;
    case "b":
      convertedChar = {
        character: "22",
        key: 2,
      };
      break;
    case "c":
      convertedChar = {
        character: "222",
        key: 2,
      };
      break;
    case "d":
      convertedChar = {
        character: "3",
        key: 3,
      };
      break;
    case "e":
      convertedChar = {
        character: "33",
        key: 3,
      };
      break;
    case "f":
      convertedChar = {
        character: "333",
        key: 3,
      };
      break;
    case "g":
      convertedChar = {
        character: "4",
        key: 4,
      };
      break;
    case "h":
      convertedChar = {
        character: "44",
        key: 4,
      };
      break;
    case "i":
      convertedChar = {
        character: "444",
        key: 4,
      };
      break;
    case "j":
      convertedChar = {
        character: "5",
        key: 5,
      };
      break;
    case "k":
      convertedChar = {
        character: "55",
        key: 5,
      };
      break;
    case "l":
      convertedChar = {
        character: "555",
        key: 5,
      };
      break;
    case "m":
      convertedChar = {
        character: "6",
        key: 6,
      };
      break;
    case "n":
      convertedChar = {
        character: "66",
        key: 6,
      };
      break;
    case "o":
      convertedChar = {
        character: "666",
        key: 6,
      };
      break;
    case "p":
      convertedChar = {
        character: "7",
        key: 7,
      };
      break;
    case "q":
      convertedChar = {
        character: "77",
        key: 7,
      };
      break;
    case "r":
      convertedChar = {
        character: "777",
        key: 7,
      };
      break;
    case "s":
      convertedChar = {
        character: "7777",
        key: 7,
      };
      break;
    case "t":
      convertedChar = {
        character: "8",
        key: 8,
      };
      break;
    case "u":
      convertedChar = {
        character: "88",
        key: 8,
      };
      break;
    case "v":
      convertedChar = {
        character: "888",
        key: 8,
      };
      break;
    case "w":
      convertedChar = {
        character: "9",
        key: 9,
      };
      break;
    case "x":
      convertedChar = {
        character: "99",
        key: 9,
      };
      break;
    case "y":
      convertedChar = {
        character: "999",
        key: 9,
      };
      break;
    case "z":
      convertedChar = {
        character: "9999",
        key: 9,
      };
      break;
    case " ":
      convertedChar = {
        character: "0",
        key: 0,
      };
      break;
    // case symbolArray.includes(char):
    //   convertedChar = {
    //     character: `1x${symbolArray.indexOf(char)}`,
    //   };
    //   break;

    default: {
      // default currently handles numerals and symbols
      if (symbolArray.includes(char)) {
        convertedChar = {
          character: `\`1x${symbolArray.indexOf(char)}\``,
          key: 1,
        };
      } else {
        convertedChar = {
          character: "*",
          key: 1,
        };
      }
    }
  }
  return convertedChar;
}

export function encrypt(text) {
  const normalisedText = normalise(text);
  let newString = "";

  for (let i = 0; i < normalisedText.length; i++) {
    let prevChar = convertToNums(normalisedText[i - 1]);
    let currentChar = convertToNums(normalisedText[i]);

    if (prevChar.key !== 404 && prevChar.key === currentChar.key) {
      newString = newString.concat(".");
    }

    newString = newString.concat(currentChar.character);
    // newString = newString.concat("l");
  }

  alert(`'${newString}'`);
}
