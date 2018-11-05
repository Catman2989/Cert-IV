using System;

namespace WeaponGame
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Weapons swaord = new Weapons("bow", 20, 10, 20, 100, 1);

            Console.WriteLine("cirtDamage: " + swaord.CritiDamage);

            Console.WriteLine(swaord.t());

            Console.ReadKey();
        }
    }
}
