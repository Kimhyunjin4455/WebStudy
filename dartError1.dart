import 'dart:io';
void main()
{
  OptExp opt = OptExp();
  String exp = "(3*5)-6/2)";
  print(exp);
  if (opt.testPair(exp)) {
    print("괄호 맞음!!");
  } else {
    print("괄호 틀림!!");
  }
}

abstract class Stack<T>
{
  bool isEmpty();
  void push(T item);
  T? pop();
  void delete();
  T? peek();
}

class StackNode<T>
{
  late T data;
  late StackNode<T>? link;
}

class LinkedStack<T> implements Stack<T>
{
  late StackNode? _top;

  bool isEmpty()
  {
    return _top == null;
  }

  void push(item){
    StackNode newNode = new StackNode();
    newNode.data = item;
    newNode.link = _top;
    _top = newNode;

  }

  T? pop()
  {
    if (isEmpty()) {
      print("Deleting fail! Linked Stack is empty!!");
      return null;

    } else {
      StackNode newNode = new StackNode();
      T item = newNode.data;
      _top = newNode.link;
      return item;
    }
  }

  void delete()
  {
    if (isEmpty()) {
      print("Deleting fail! Linked Stack is empty!!");
    } else {
      StackNode newNode = new StackNode();
      _top = newNode.link;
    }
  }

  T? peek()
  {
    if (isEmpty()) {
      print("Peeking fail! Linked Stack is empty!!");
      return null;
    } else {
      StackNode newNode = new StackNode();
      return newNode.data;
    }
  }

  void printStack()
  {
    if (isEmpty()) {
      print("Linked Stack is empty!! %n %n");
    } else {
      //StackNode newNode = new StackNode(); //
      StackNode? temp = _top;
      //_top = newNode.link; //
      print("Linked Stack>> ");
      while (temp != null) {
        print("\t ${temp.data} \n", );
        temp = temp.link;
      }
      print(temp);
    }
  }


}

class OptExp
{
  late String exp;
  late int expSize;
  late String testCh;
  late String openPair;

  bool testPair(String exp)
  {
    this.exp = exp;
    LinkedStack S = LinkedStack();
    expSize = this.exp.length;
    for (int i = 0; i < expSize; i++) {
      testCh = exp.substring(i,i+1);
      switch (testCh) {
        case '(':
        case '{':
        case '[':
          S.push(testCh);
          break;
        case ')':
        case '}':
        case ']':
          if (S.isEmpty()) {
            return false;
          } else {
            openPair = S.pop();
            if ((((openPair == '(') && (testCh != ')')) || ((openPair == '{') && (testCh != '}'))) || ((openPair == '[') && (testCh != ']'))) {
              return false;
            } else {
              break;
            }
          }
      }
    }
    if (S.isEmpty()) {
      return true;
    } else {
      return false;
    }
  }
}


