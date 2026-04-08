#include<stdio.h>
#include<conio.h>
void main()
{
	     int a, b, c, d, e;
	     int total;

	     clrscr();
	     printf("maths:");
	     scanf("%d",&a);
	     printf("English:");
	     scanf("%d",&b);
	     printf("Hindi:");
	     scanf("%d",&c);
	     printf("Copmuter:");
	     scanf("%d",&d);
	     printf("Science:");
	     scanf("%d",&e);

	     printf("\nmaths:\t\t%d\n",a);
	     printf("English:\t%d\n",b);
	     printf("Hindi:\t\t%d\n",c);
	     printf("Computer:\t%d\n",d);
	     printf("Science:\t%d\n\n",e);

	     total= a+b+c+e+d;


	     printf("total:\t\t%d\n",total);
	     printf("per:\t\t%d\n\n",total/5);


	    if(a<b)
	    {
		   if(a<c)
			{
				if(a<d)
					{
						if(a<e)
							{
								printf("a is min\n");
							}
						else
							{
								printf("e is min\n");
							}
					}
				else
					{
						if(d<e)
							{
								printf("d is min\n");
							}
						 else
							{
								printf("e is min\n");
							}
					}

			}
		else
			{
				if(c<d)
					{
						if(c<e)
							{
								printf("c is min\n");
							}
						 else
							{
								printf("e is min\n");
							}
					}
				 else
					{
						if(d<e)
							{
								printf("d is min\n");
							}
						else
							{
								printf("e is min\n");
							}

					}

			}

	    }
	   else
	   {
		if(b<c)
			{
				if(b<d)
					{
						if(b<e)
							{
								printf("b is min\n");
							}
						 else
							{
								printf("e is min\n");
							}
					}
				else
					{
						if(d<e)
							{
								printf("d is min\n");
							}
						else
							{
								printf("e is min\n");
							}
					}
			}
		else
			{
				if(c<d)
					{
						if(c<e)
							{
								printf("c is min\n");
							}
						else
							{
								printf("e is min\n");
							}
					}
				else
					{
						if(d<e)
							{
								printf("d is min\n");
							}
						else
							{
								printf("e is min\n");
							}
					}


			}

	   }

	    if(a>b)
	    {
		   if(a>c)
			{
				if(a>d)
					{
						if(a>e)
							{
								printf("a is max\n");
							}
						else
							{
								printf("e is max\n");
							}
					}
				else
					{
						if(d>e)
							{
								printf("d is max\n");
							}
						 else
							{
								printf("e is max\n");
							}
					}

			}
		else
			{
				if(c>d)
					{
						if(c>e)
							{
								printf("c is max\n");
							}
						 else
							{
								printf("e is max\n");
							}
					}
				 else
					{
						if(d>e)
							{
								printf("d is max\n");
							}
						else
							{
								printf("e is max\n");
							}

					}

			}

	    }
	   else
	   {
		if(b>c)
			{
				if(b>d)
					{
						if(b>e)
							{
								printf("b is max\n");
							}
						 else
							{
								printf("e is max\n");
							}
					}
				else
					{
						if(d>e)
							{
								printf("d is max\n");
							}
						else
							{
								printf("e is max\n");
							}
					}
			}
		else
			{
				if(c>d)
					{
						if(c>e)
							{
								printf("c is max\n");
							}
						else
							{
								printf("e is max\n");
							}
					}
				else
					{
						if(d>e)
							{
								printf("d is max\n");
							}
						else
							{
								printf("e is max\n");
							}
					}
			 }
	   }
	   if(a>33)
	   {
		if(b>33)
		{
			if(c>33)
			{
				if(d>33)
				{
					if(e>33)
					{
						printf("pass\n");
					}
					else
					{
						printf("fail\n");
					}
				}
				else
				{
						printf("fail\n");
				}
			}
			else
			{
					printf("fail\n");
			}
		}
		else
		{
				printf("fail\n");
		}
	   }
	   else
	   {
			printf("fail\n");
	   }
	     getch();

}


