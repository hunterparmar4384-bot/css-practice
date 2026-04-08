#include<stdio.h>
#include<conio.h>
void main()
{
	float a,b,c,d;
	float total,per;
	clrscr();

	printf("Paper one:");
	scanf("%f",&a);
	printf("Paper two:");
	scanf("%f",&b);
	printf("Paper third:");
	scanf("%f",&c);
	printf("Paper foru:");
	scanf("%f",&d);

	printf("\n%f\n",a);
	printf("%f\n",b);
	printf("%f\n",c);
	printf("%f\n\n",d);

	total = a+b+c+d;
	printf("TOTAL:%f\n",total);
	printf("per:%f",total/4);

	getch();

}