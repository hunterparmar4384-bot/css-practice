#include<stdio.h>
#include<conio.h>
void main()
{

	int a = 30, b = 50, c = 75;
	clrscr();
	if (a<b)
		{
			if(a<c)
			{
			      printf("a is min");
			}
			else
			{
			      printf("c is min");
			}

		}
	else
	 {
		if(b<c)
		{
			printf("b is min");
		}
		else
		{
		       printf("c is min");

		}
	 }
	getch();

}

