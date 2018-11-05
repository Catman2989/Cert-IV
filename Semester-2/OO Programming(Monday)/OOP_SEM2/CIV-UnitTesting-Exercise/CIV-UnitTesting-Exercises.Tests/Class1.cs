using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CIV_UnitTesting_Exercises;


namespace CIV_UnitTesting_Exercises.Tests
{
    [TestFixture]
    public class Class1
    {
        [TestCase]

        public void FibCheckTest()
        {
            //Arrange
            int num = 56;
            bool expected = true;

            //Act
            bool actual = RecursiveCalculations.FibCheck(num);

            //Assert
            Assert.AreEqual(expected, actual);
        }

        [TestCase]
        public void PrimeCheckRecTest()
        {
            //Arrange
            int num = 7;
            int divisor = 2;
            bool expected = true;

            //Act
            bool actual = RecursiveCalculations.PrimeCheckRec(num, divisor);

            //Assert
            Assert.AreEqual(expected, actual);
        }
    }
}
