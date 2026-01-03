export default class Character {
  constructor(name, type) {
    const typeList = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Undead",
      "Zombie",
      "Daemon",
    ];

    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error("Имя должно быть от 2 до 10 символов");
    }

    if (typeList.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Недопустимый тип персонажа");
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw new Error('You cannot raise the level with zero health');
        }
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}
