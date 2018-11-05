using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shapes
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

        public int GetPerimeter()
        {
            return (Side1Lenght + Side2Lenght + Side3Lenght + Side4Lenght);
        }
    }
    public class Square : Quadrilateral
    {
        public int GetArea()
        {
            return (Side1Lenght * Side1Lenght);
        }

        public Square(string colour, int input) : base(colour, input, input, input, input)
        {

        }

    }
    public class Rectangle : Quadrilateral
    {
        public int GetArea()
        {
            return Side1Lenght * Side2Lenght;
        }

        public Rectangle(string colour, int input, int input2) : base(colour, input, input2, input, input2)
        {

        }
    }
    
    public class Triangle : Shape
    {
        public float Side1Lenght { get; set; }
        public float Side2Lenght { get; set; }
        public float Side3Lenght { get; set; }

        public float GetPerimeter()
        {
            return (Side1Lenght + Side2Lenght + Side3Lenght);
        }

        public Triangle(string colour, float side1Lenght, float side2Lenght) : base(colour)
        {
            double side3Lenght = ((side1Lenght * side1Lenght) + (side2Lenght * side2Lenght));
            side3Lenght = Math.Sqrt(side3Lenght);
            float myBoat = float.Parse(side3Lenght.ToString());

            this.Side1Lenght = side1Lenght;
            this.Side2Lenght = side2Lenght;
            this.Side3Lenght = myBoat;
        }
    }
    public class RightAngleTriangle : Triangle
    {
        public float GetArea()
        {
            return (Side1Lenght * Side2Lenght / 2);
        }

        public RightAngleTriangle(string colour, float input, float input2) : base(colour, input, input2)
        {
            
        }

    }
    public class EquilateralTriangle : Triangle
    {
        public float GetArea()
        {
            return (float)(Math.Sqrt(3f) / 4 * Side1Lenght * Side1Lenght);
        }

        public EquilateralTriangle(string colour, float input) : base(colour, input, input)
        {

        }
    }
}
