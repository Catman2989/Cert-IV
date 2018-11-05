using System;
using System.Collections.Generic;
using System.Text;

namespace WeaponGame
{
    public abstract class Player
    {
        public string PlayerName { get; set; }
        public int HealPoints { get; set; }
        public int Strength { get; set; }
        public int Armor { get; set; }

        public Player(string playerName, int healPoints, int strength, int armor)
        {
            this.PlayerName = playerName;
            this.HealPoints = healPoints;
            this.Strength = strength;
            this.Armor = armor;
        }
    }
}
