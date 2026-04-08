 #include<stdio.h>
 #include<conio.h>

void main()
{
	int a = 80, b = 75, c = 65, d = 74, e = 90;
	int total, per;
	clrscr();

	printf("Parmar shaktisinh k\n");
	printf("subjects: \t marks\n");
	printf("Matha: \t\t %d\n",a);
	printf("English: \t %d\n",b);
	printf("Hindi: \t\t %d\n",c);
	printf("Computer: \t %d\n",d);
	printf("Science: \t %d\n\n",e);
	total = a+b+c+d+e;
	per = total/5;
	printf("Total: \t\t %d\n",total);
	printf("parcentage: \t %d",per);
	getch();

}

