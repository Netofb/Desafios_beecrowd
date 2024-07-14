#include <stdio.h>
#include <iostream>
#include <bits/stdc++.h>
#define _ ios_base::sync_with_stdio(0);cin.tie(0);
#define endl '\n'
using namespace std;

int main() { _
 
  int N; 
  cin >> N;

     for(int i = 0; i < N; i++) {
         long long X; 
         cin >> X;
         bool primo = true;
        
         for(long long j=2; j*j <= X; j++)
         if(X % j == 0) primo = false;
        
         if(primo) cout << "Prime" << endl;
         else cout << "Not Prime" << endl;
     }
 
    return 0;
}