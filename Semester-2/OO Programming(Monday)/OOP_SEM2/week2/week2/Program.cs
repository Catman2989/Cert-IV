using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace week2
{
    class Program
    {
        static void Main(string[] args)
        {
            bool notPrime = false;
            int primesFound = 0;
            
            Console.WriteLine("enter number number of primes");
            string strenterd = Console.ReadLine();
            int.TryParse(strenterd, int numOfPrime);
            int number1 = 1;
            int number2 = 1;



            int halfNumber = number1 / 2;
            for (int i = 0; i == halfNumber || notPrime = true; i++)
            {
                i % halfNumber = int checkPrime;
                if(checkPrime == 0)
                {
                    return notPrime = true;
                }
                else
                {
                    return notPrime = false;
                }
            }
        }
    }
}
