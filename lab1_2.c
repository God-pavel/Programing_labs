// Pi (not in math.h)
#define M_PI 3.14159265358979323846
#include <math.h>

double missingAngle(double h, double a, double o) {
 if (o == 0) {
 return round(acos(a/h)*180/M_PI );


 }
 if (h == 0) {
 return round(atan(o/a)*180/M_PI );

 }
 if (a == 0) {
 return round(asin(o/h)*180/M_PI );

 }


}
