import { linkedList } from "./linkedList.js";

let list = new linkedList();
let index = -1;
let find = "mottale";
list.prepend("jan");
list.append("iv");
list.prepend("mottale");
list.append("gabs");
list.printList();
console.log("Listsize:" + list.size());
console.log("Head:" + list.head());
console.log("Tail:" + list.tail());
console.log("Index[" + index + "]:" + list.at(index));
console.log(
  "Find[" +
    find +
    "]:" +
    list.contains(find) +
    " at Position[" +
    list.find(find) +
    "]"
);
console.log(list.toString());
