#include<stdio.h>
#include<conio.h>
void main()
{
	int a,b,c;
	clrscr();
	scanf("%d",&a);
	scanf("%d",&b);
	scanf("%d",&c);

	printf("A=%d\n",a);
	printf("B=%d\n",b);
	printf("C=%d\n",c);

	if(a==b)
	{
		if(a==c)
		{
			printf("a,b,c same");
		}
		else
		{
			printf("a,b same c diff");

		}
	}
	else
	{
		if(b==c)
		{
			printf("b,c same a diff");
		}
		else
		{
			if(a==c)
			{
				printf("a,c same b diff");
			}
			else
			{
				printf("a,b,c diff");
			}

		}
	}




	getch();

}