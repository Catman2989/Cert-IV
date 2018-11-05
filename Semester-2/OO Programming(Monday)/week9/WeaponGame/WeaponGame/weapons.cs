using System;
using System.Collections.Generic;
using System.Text;

namespace WeaponGame
{
    public abstract class Weapons
    {
        public string WeaponName { get; set; }
        public int BaseDamage { get; set; }
        public int BaseRange { get; set; }
        public int CritiChance { get; set; }
        public int CritiDamage { get; set; }
        public int ActionPoint { get; set; }


        public Weapons(string weaponName, int baseDamage, int baseRange, int critiChance, int critiDamage, int actionPoint)
        {
            this.WeaponName = weaponName;
            this.BaseDamage = baseDamage;
            this.BaseRange = baseRange;
            this.CritiChance = critiChance;
            this.CritiDamage = critiDamage;
            this.ActionPoint = actionPoint;
        }
        public int Poke()
        {
            return 1;
        }
    }
}
