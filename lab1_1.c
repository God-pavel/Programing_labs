#include <stdlib.h>

int find_outlier(const int *values, size_t count) {

  if (values[0]%2==values[1]%2 || values[0]%2==-values[1]%2) {
    for (int i=2; i<count; i++) {
      if (values[i]%2 != values[i-1]%2 && values[i]%2 != -values[i-1]%2) {
        return values[i];
        }
      }
    }
  else
    {
    if (values[1]%2==values[2]%2) {
      return values[0];
      }
    else return values[1];
 }
 }
