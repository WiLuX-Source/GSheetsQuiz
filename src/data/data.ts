const Questions = [
      {
        code: 'new Date("0")',
        options: [
          '1970-01-01T00:00:00.000Z',
          '2000-01-01T00:00:00.000Z',
          'Invalid Date',
          'Throws an error'
        ],
        correct: 1,
        explanation: 'The string "0" is interpreted as the year 2000, not as a timestamp!'
      },
      {
        code: 'new Date(0)',
        options: [
          '1970-01-01T00:00:00.000Z',
          '2000-01-01T00:00:00.000Z',
          'Invalid Date',
          'Throws an error'
        ],
        correct: 0,
        explanation: 'The <i>number</i> 0, as opposed to the string "0", is interpreted as milliseconds since the Unix epoch (Jan 1, 1970).'
      },
      {
        code: 'Date.parse(0) === Date.parse("0")',
        options: [
          'true',
          'false',
          'Throws an error',
          'undefined'
        ],
        correct: 0,
        explanation: 'Both parse to 946684800000 milliseconds! Date.parse only operates on strings, so 0 is coerced to the string "0".'
      },

      {
        code: 'new Date("not a date")',
        options: [
          'null',
          'undefined',
          'Invalid Date',
          'Throws an error'
        ],
        correct: 2,
        explanation: 'Invalid Date is still a Date object! It\'s not null or an error.'
      },
      {
        code: 'new Date("not a date").getTime()',
        options: [
          '0',
          'NaN',
          'null',
          'Throws an error'
        ],
        correct: 1,
        explanation: 'Invalid Date objects return NaN for getTime(). This function returns the number of milliseconds since the Unix epoch for valid dates.'
      },
      {
        code: 'new Date("not a date").toISOString()',
        options: [
          '"Invalid Date"',
          'null',
          'NaN',
          'Throws an error'
        ],
        correct: 3,
        explanation: 'toISOString() throws a RangeError on Invalid Date objects.'
      },
      {
        code: 'new Date("not a date").toTimeString()',
        options: [
          '"Invalid Date"',
          '""',
          'null',
          'Throws an error'
        ],
        correct: 0,
        explanation: 'toTimeString() returns the string "Invalid Date" for invalid dates. 🫠'
      },
      {
        code: 'new Date("1")',
        options: [
          '1970-01-01T00:00:01.000Z',
          '2001-01-01T00:00:00.000Z',
          '0001-01-01T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 1,
        explanation: 'Unlike "0", "1" is interpreted as a month, and the year defaults to 2001 for some reason.'
      },
      {
        code: 'new Date("2")',
        options: [
          '2002-01-01T00:00:00.000Z',
          '2001-01-02T00:00:00.000Z',
          '2001-02-01T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 2,
        explanation: '"2" is interpreted as February 2001 (month 2), as you might expect from the previous question.'
      },
      {
        code: 'new Date("12")',
        options: [
          '2012-01-01T00:00:00.000Z',
          '2001-01-12T00:00:00.000Z',
          '2001-12-01T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 2,
        explanation: 'Also works for December.'
      },
      {
        code: 'new Date("13")',
        options: [
          '2013-01-01T00:00:00.000Z',
          '2001-01-13T00:00:00.000Z',
          '2001-13-01T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 3,
        explanation: '"13" would be month 13, which doesn\'t exist, so it\'s Invalid Date.'
      },
      {
        code: 'new Date("99") > new Date("100")',
        options: [
          'true',
          'false',
          'Throws an error',
          'NaN'
        ],
        correct: 0,
        explanation: '"99" is year 1999, while "100" is year 0100. 1999 > 0100! Date starts interpreting numbers as years starting at "32".'
      },
      {
        code: 'new Date("49") > new Date("50")',
        options: [
          'true',
          'false',
          'Throws an error',
          'NaN'
        ],
        correct: 0,
        explanation: 'And for some reason "32" to "49" is 2032-2049, while "50" onwards is 1950+. So 2049 > 1950!'
      },
      {
        code: 'new Date("12.1")',
        options: [
          '2001-12-01T00:00:00.000Z',
          '2001-01-01T00:00:00.000Z',
          '2012-01-01T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 0,
        explanation: '"12.1" is interpreted as the date December 1st, and as before for dates with no year the default is 2001 because of course.'
      },
      {
        code: 'new Date("12.0")',
        options: [
          '2012-01-01T00:00:00.000Z',
          '2001-12-01T00:00:00.000Z',
          '2001-01-12T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 3,
        explanation: 'The .0 is still interpreted as a day, and no month has a 0th day, so this is considered invalid.'
      },
      {
        code: 'new Date("12.-1")',
        options: [
          '2001-12-01T00:00:00.000Z',
          '2001-01-01T00:00:00.000Z',
          '2012-01-01T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 0,
        explanation: 'The dash here is ignored, so this is interpreted the same as "12.1".'
      },

      {
        code: 'new Date("perhaps 1")',
        options: [
          'Invalid Date',
          '2001-01-01T00:00:00.000Z',
          '1970-01-01T00:00:01.000Z',
          'Throws an error'
        ],
        correct: 1,
        explanation: 'Leading text is always ignored! It finds the "1" and parses it as the month January.'
      },
      {
        code: 'new Date("perhaps")',
        options: [
          'Invalid Date',
          '2001-01-01T00:00:00.000Z',
          '1970-01-01T00:00:01.000Z',
          'Throws an error'
        ],
        correct: 0,
        explanation: 'But you can\'t <i>just</i> have text! It needs a number to parse, so this is Invalid Date. It\'s equivalent to new Date("").'
      },
      {
        code: 'new Date("maybe 1")',
        options: [
          '2001-01-01T00:00:00.000Z',
          '2001-04-30T23:00:00.000Z',
          '2001-05-01T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 1,
        explanation: '"may" in "maybe" is parsed as the month May! And for some reason this expression cares about your local timezone, which happens to be BST for me right now.',
      },
      {
        code: 'new Date("fourth of may 2010")',
        options: [
          'Invalid Date',
          '2010-05-04T00:00:00.000Z',
          '2010-04-30T23:00:00.000Z',
          '2010-05-01T00:00:00.000Z'
        ],
        correct: 2,
        explanation: '"fourth of" is ignored, this is just parsing "may 2010" and again local timezone is important.',
      },
      {
        code: 'new Date("May 4 UTC")',
        options: [
          'Invalid Date',
          '2001-05-04T00:00:00.000Z',
          '2010-04-30T23:00:00.000Z',
          '2010-05-01T00:00:00.000Z'
        ],
        correct: 1,
        explanation: 'UTC is correctly parsed as a timezone.',
      },
      {
        code: 'new Date("May 4 UTC+1")',
        options: [
          'Invalid Date',
          '2001-05-04T00:00:00.000Z',
          '2001-05-03T23:00:00.000Z',
          '2010-05-01T00:00:00.000Z'
        ],
        correct: 2,
        explanation: 'You can add modifiers to timezones and it works as you would expect.',
      },
      {
        code: 'new Date("May 4 UTC+1:59")',
        options: [
          'Invalid Date',
          '2001-05-04T00:00:00.000Z',
          '2001-05-03T22:01:00.000Z',
          'Throws an error'
        ],
        correct: 2,
        explanation: 'It also supports minutes!',
      },
      {
        code: 'new Date("May 4 UTC+1:60")',
        options: [
          'Invalid Date',
          '2001-05-04T00:00:00.000Z',
          '2001-05-03T22:00:00.000Z',
          '1960-05-03T23:00:00.000Z'
        ],
        correct: 3,
        explanation: 'Until it doesn\'t! 60 is being parsed as the year here, UTC+1 is the timezone.',
      },
      {
        code: 'new Date("1990 2010")',
        options: [
          '1990-01-01T00:00:00.000Z',
          '2010-01-01T00:00:00.000Z',
          '2000-01-01T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 3,
        explanation: 'No tricks here, just a plain ol\' Invalid Date.'
      },
      {
        code: 'new Date("1990 (2010)")',
        options: [
          '1990-01-01T00:00:00.000Z',
          '2010-01-01T00:00:00.000Z',
          '2000-01-01T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 0,
        explanation: 'For some reason, parenthesised text is ignored.'
      },
      {
        code: 'new Date("(1990) 2010")',
        options: [
          '1990-01-01T00:00:00.000Z',
          '2010-01-01T00:00:00.000Z',
          '2000-01-01T00:00:00.000Z',
          'Invalid Date'
        ],
        correct: 1,
        explanation: 'No matter where it is.'
      },
      {
        code: 'new Date(-[])',
        options: [
          '1970-01-01T00:00:00.000Z',
          '2000-01-01T00:00:00.000Z',
          'Throws an error',
          'Invalid Date'
        ],
        correct: 0,
        explanation: 'I couldn\'t resist. -[] is coerced to 0, which is interpreted as milliseconds since the Unix epoch (Jan 1, 1970).'
      }
    ];
export default Questions;