using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace challenge
{
    class Program
    {
        static void Main(string[] args)
        {
            string input;
            int number1 = 1;
            int number2 = 1;

            Console.WriteLine("type 1 for a Quadrilateral shape");
            Console.WriteLine("type 2 for a Triangle shape");
            Console.WriteLine("type anythig elsa to quit");
            input = Console.ReadLine();
            Console.Clear();

            if (input == "1")
            {
                Console.WriteLine("type 1 for a Square shape");
                Console.WriteLine("type 2 for a Rectangle shape");
                Console.WriteLine("type anythig elsa to quit");
                input = Console.ReadLine();
                Console.Clear();
                if (input == "1")
                {
                    try
                    {
                        Console.WriteLine("what Lenght do you want the sides to be?");
                        number1 = int.Parse(Console.ReadLine());
                        if (number1 >= 1)
                        {

                        }
                        else
                        {
                            throw new numberIslessThenOne();
                        }
                    }
                    catch (numberIslessThenOne)
                    {
                        Console.WriteLine("Number can't be less then one!");
                        Console.ReadLine();
                        Environment.Exit(0);
                    }
                    catch (Exception)
                    {
                        Console.WriteLine("Please wite a number");
                        Console.ReadLine();
                        Environment.Exit(0);
                    }
                    Console.WriteLine("The Perimeter is " + (number1 * 4));
                    Console.WriteLine("The Area is " + (number1 * number1));
                    Console.ReadLine();

                }
                else if (input == "2")
                {
                    try
                    {
                        Console.Write("what Lenght do you want the first set of side to be?");
                        number1 = int.Parse(Console.ReadLine());
                        Console.Write("what Lenght do you want the sceond set of side to be?");
                        number2 = int.Parse(Console.ReadLine());
                        if (number2 >= 1 && number1 >= 1)
                        {

                        }
                        else
                        {
                            throw new numberIslessThenOne();
                        }
                    }
                    catch (numberIslessThenOne)
                    {
                        Console.WriteLine("Number can't be less then one!");
                        Console.ReadLine();
                        Environment.Exit(0);
                    }
                    catch (Exception)
                    {
                        Console.WriteLine("Please wite a number");
                        Console.ReadLine();
                        Environment.Exit(0);
                    }
                    Console.WriteLine("The Perimeter is " + (number1 * 2 + number2 * 2));
                    Console.WriteLine("The Area is " + (number1 * number2));
                    Console.ReadLine();
                }
                else
                {
                    Environment.Exit(0);
                }
            }
            else if (input == "2")
            {
                Console.WriteLine("type 1 for a Right Angle Triangle shape");
                Console.WriteLine("type 2 for a Equilateral Triangle shape");
                Console.WriteLine("type anythig elsa to quit");
                input = Console.ReadLine();
                Console.Clear();
                if (input == "1")
                {
                    try
                    {
                        Console.Write("what Lenght do you want the first set of side to be?");
                        number1 = int.Parse(Console.ReadLine());
                        Console.Write("what Lenght do you want the sceond set of side to be?");
                        number2 = int.Parse(Console.ReadLine());
                        if (number2 >= 1 && number1 >= 1)
                        {

                        }
                        else
                        {
                            throw new numberIslessThenOne();
                        }
                    }
                    catch (numberIslessThenOne)
                    {
                        Console.WriteLine("Number can't be less then one!");
                        Console.ReadLine();
                        Environment.Exit(0);
                    }
                    catch (Exception)
                    {
                        Console.WriteLine("Please wite a number");
                        Console.ReadLine();
                        Environment.Exit(0);
                    }

                    Console.WriteLine("The hypotenuse is " + (Math.Sqrt(number1 * number1 + number2 * number2)));
                    Console.WriteLine("The Perimeter is " + (number1 + number2 + (Math.Sqrt(number1 * number1 + number2 * number2))));
                    Console.WriteLine("The Area is " + (number1 * number2 / 2));
                    Console.ReadLine();
                }
                else if (input == "2")
                {
                    try
                    {
                        Console.WriteLine("what Lenght do you want the sides to be?");
                        number1 = int.Parse(Console.ReadLine());
                        if (number1 >= 1)
                        {

                        }
                        else
                        {
                            throw new numberIslessThenOne();
                        }
                    }
                    catch (numberIslessThenOne)
                    {
                        Console.WriteLine("Number can't be less then one!");
                        Console.ReadLine();
                        Environment.Exit(0);
                    }
                    catch (Exception)
                    {
                        Console.WriteLine("Please wite a number");
                        Console.ReadLine();
                        Environment.Exit(0);
                    }
                    Console.WriteLine("The Perimeter is " + (number1 * 3));
                    Console.WriteLine("The Area is " + (Math.Sqrt(3f) / 4 * number1 * number1));
                    Console.ReadLine();
                }
                else
                {
                    Environment.Exit(0);
                }
            }
            else
            {
                Environment.Exit(0);
            }            
        }
    }
    public class numberIslessThenOne : Exception
    {
        public numberIslessThenOne()
        {
        }

        public numberIslessThenOne(string message)
            : base(message)
        {
        }

        public numberIslessThenOne(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
