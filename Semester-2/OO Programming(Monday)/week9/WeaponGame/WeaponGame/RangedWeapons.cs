using System;
using System.Collections.Generic;
using System.Text;

namespace WeaponGame
{
    public class RangedWeapons : Weapons
    {
        public RangedWeapons(int baseDamage, int critiChance, int critiDamage, int actionPoint, int baseRange)
            : base(baseDamage, critiChance, critiDamage, actionPoint, baseRange)
        {
            actionPoint = 2;
            Random random = new Random();
            int Damage = baseDamage * (100 - random.Next(0, 50));
            int randomNumber = random.Next(0, 100);
            if (randomNumber <= critiChance)
            {
                actionPoint++;
                Player.strength -= actionPoint;
                //Damage * critiDamage;
            }
            else
            {
                Player.strength -= actionPoint;
                //Damage;
            }
        }
    }
}
