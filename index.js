const jsonString = '{"name":"John", "age":30, "city":"New York"}';

const formattedJson = JSON.stringify(JSON.parse(jsonString), null, 2);

console.log(formattedJson);
