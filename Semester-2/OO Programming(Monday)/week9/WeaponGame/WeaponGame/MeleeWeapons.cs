using System;
using System.Collections.Generic;
using System.Text;

namespace WeaponGame
{
    public class MeleeWeapons : Weapons
    {
        public int Poke(int baseDamage)
        {
            return 1;
        }
        public MeleeWeapons(string weaponName, int baseDamage, int baseRange, int critiChance, int critiDamage, int actionPoint)
            : base(weaponName, baseDamage, critiChance, critiDamage, actionPoint, baseRange)
        {
            actionPoint = 1;
            Random random = new Random();
            int randomNumber = random.Next(1, 101);
            if (baseRange < 1)
            {
                baseDamage = 0;
            }

            if (randomNumber <= critiChance)
            {
                Player.strength -= actionPoint;
                int Damage = baseDamage * critiDamage;
            }
            else
            {
                Player.strength -= actionPoint;
                int Damage = baseDamage;
            }
        }
    }
}
