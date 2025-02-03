/*
Hugo Carcamo
Jan 27, introduction to C++
*/
#include<iostream>

using namespace std;

int main(){
    cout<<"Hello World! \n"<<std::endl;
    cout<<"Welcome to C++ \t\t Hugo Carcamo";
    cout<<"\n----------Example 1: Variables----------"<<endl;
    // numerical variables
    // declare variables --> identifier
    int number = 8;
    cout<<"The value of variable number = "<<number<<endl; 
    float n = 5.2;
    cout<<"The value of variable n = "<<n<<endl;
    // variables are eclared ONLY once
    number = 2;
    cout<<"Updated value of number = "<<number<<endl;
    // string and character variables
    string username = "Peterpan";
    char symbol = '$';
    cout<<"value of username = \t"<<username<<endl;
    cout<<"value of symbol = \t"<<symbol<<endl;

    cout<<"\n----------Example 2: cin----------"<<endl;
    // declare variable
    int x;
    // collect the value for variable x using cin
    cout<<"Enter a number = ";
    cin>>x;
    cout<<"The collected number is \t"<<x<<endl;
    cout<<"\n----------Lab 1----------"<<endl;
    string country;
    cout<<"Enter a country: ";
    cin>>country;
    cout<<"Entered country : \t"<<country<<endl;
    char gender;
    cout<<"Enter your gender: ";
    cin>>gender;
    cout<<"Entered gender : \t"<<gender<<endl;
    int zipcode;
    cout<<"Enter your zipcode: ";
    cin>>zipcode;
    cout<<"Entered zipcode : \t"<<zipcode<<endl;
    float rate;
    cout<<"Enter your tax rate";
    cin>>rate;
    cout<<"Entered tax rate : \t"<<rate<<endl;
    return 0;
}