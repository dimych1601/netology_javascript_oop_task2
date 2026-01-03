import Bowman from '../Bowman'
import Character from '../Character'
import Daemon from '../Daemon'
import Magician from '../Magician'
import Swordsman from '../Swordsman'
import Undead from '../Undead'
import Zombie from '../Zombie'

test('Имя героя слишком короткое', () => {
    expect(
        () => new Character('O', 'Bowman', 100, 100),
    ).toThrow('Имя должно быть от 2 до 10 символов');
});

test('Имя героя слишком длинное', () => {
    expect(
        () => new Character('LooooooongName', 'Daemon', 100, 100),
    ).toThrow('Имя должно быть от 2 до 10 символов');
});

test('Недопустимый персонаж', () => {
    expect(
        () => new Character('Bowy', 'FakeBowman', 100, 100),
    ).toThrow('Недопустимый тип персонажа');
});

describe('levelUp', () => {
  test('повышает level на 1, attack и defence на 20%, health до 100', () => {
    const char = new Character('Hero', 'Bowman');
    char.attack = 50;
    char.defence = 30;
    char.health = 50;
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBeCloseTo(60); // 50 * 1.2 = 60
    expect(char.defence).toBeCloseTo(36); // 30 * 1.2 = 36
    expect(char.health).toBe(100);
  });

  test('выбрасывает ошибку, если health равен 0', () => {
    const char = new Character('Hero', 'Bowman');
    char.health = 0;
    expect(() => char.levelUp()).toThrow('You cannot raise the level with zero health');
  });
});

describe('damage', () => {
  test('уменьшает health с учётом defence', () => {
    const char = new Character('Hero', 'Bowman');
    char.health = 100;
    char.defence = 25; // 25% защита
    char.damage(40);
    // урон = 40 * (1 - 0.25) = 30
    expect(char.health).toBeCloseTo(70);
  });

  test('health не становится меньше 0', () => {
    const char = new Character('Hero', 'Bowman');
    char.health = 10;
    char.defence = 0;
    char.damage(20);
    expect(char.health).toBe(0);
  });

  test('если health 0, damage не меняет health', () => {
    const char = new Character('Hero', 'Bowman');
    char.health = 0;
    char.defence = 0;
    char.damage(20);
    expect(char.health).toBe(0);
  });
});

test('New Bowman', () => {
    const bowman = new Bowman('Bowy');
    expect(bowman).toEqual({
        name: 'Bowy',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('New Daemon', () => {
    const daemon = new Daemon('Daemy');
    expect(daemon).toEqual({
        name: 'Daemy',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('New Magician', () => {
    const magician = new Magician('Magy');
    expect(magician).toEqual({
        name: 'Magy',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('New Swordsman', () => {
    const swordsman = new Swordsman('Swordy');
    expect(swordsman).toEqual({
        name: 'Swordy',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test('New Undead', () => {
    const undead = new Undead('Undy');
    expect(undead).toEqual({
        name: 'Undy',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('New Zombie', () => {
    const zombie = new Zombie('Zomy');
    expect(zombie).toEqual({
        name: 'Zomy',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});
