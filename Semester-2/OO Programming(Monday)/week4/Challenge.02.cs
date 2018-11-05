using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class Shape
    {
        public string Colour { get; set; }

        public Shape(string colour)
        {
            this.Colour = colour;
        }
    }
    public class Quadrilateral : Shape
    {
        public int Side1Lenght { get; set; }
        public int Side2Lenght { get; set; }
        public int Side3Lenght { get; set; }
        public int Side4Lenght { get; set; }

        public Quadrilateral(string colour, int side1Lenght, int side2Lenght, int side3Lenght, int side4Lenght) : base(colour)
        {
            this.Side1Lenght = side1Lenght;
            this.Side2Lenght = side2Lenght;
            this.Side3Lenght = side3Lenght;
            this.Side4Lenght = side4Lenght;
        }

        protected int Perimeter()
        {
            return (Side1Lenght + Side2Lenght + Side3Lenght + Side4Lenght);
        }
    }
    public class Square : Quadrilateral
    {
        protected int Area()
        {
            return (Side1Lenght * Side1Lenght);
        }

        public Square(string colour, int input) : base(colour, input, input, input, input)
        {

        }

    }
    public class Rectangle : Quadrilateral
    {
        protected int Area()
        {
            return Side1Lenght * Side2Lenght;
        }

        public Rectangle(string colour, int input, int input2) : base(colour, input, input2, input, input2)
        {

        }
    }
    public class Triangle : Shape
    {
        public int Side1Lenght { get; set; }
        public int Side2Lenght { get; set; }
        public int Side3Lenght { get; set; }

        public Triangle(string colour, int side1Lenght, int side2Lenght, int side3Lenght) : base(colour)
        {
            this.Side1Lenght = side1Lenght;
            this.Side2Lenght = side2Lenght;
            this.Side3Lenght = side3Lenght;
        }
        protected int Perimeter()
        {
            return (Side1Lenght + Side2Lenght + Side3Lenght);
        }
    }
    public class RinghtAngleTriangle : Triangle
    {
        protected float Area()
        {
            return (Side1Lenght * Side2Lenght / 2);
        }

        public RinghtAngleTriangle(string colour, int input, int input2, int input3) : base(colour, input, input2, input3)
        {

        }

    }
    //public class EquilateralTriangle : Triangle
    //{
    //    protected float Area()
    //    {
    //        return (Math.Sqrt(3f) / 4 * Side1Lenght * Side1Lenght);
    //    }

    //    public EquilateralTriangle(string colour, int input) : base(colour, input, input, input)
    //    {

    //    }
    //}
}
