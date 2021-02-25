[![Main workflow](https://github.com/letzabelin/generate-difference/workflows/Main%20workflow/badge.svg)](https://github.com/letzabelin/generate-difference/actions)
[![Build Status](https://travis-ci.com/letzabelin/generate-difference.svg?branch=master)](https://travis-ci.com/letzabelin/generate-difference)
[![Maintainability](https://api.codeclimate.com/v1/badges/bd780c263f070201781e/maintainability)](https://codeclimate.com/github/letzabelin/generate-difference/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bd780c263f070201781e/test_coverage)](https://codeclimate.com/github/letzabelin/generate-difference/test_coverage)

# Вычислитель отличий by Hexlet

Проект выполнен в рамках прохождения профессии "Frontend/Backend JavaScript" на сайте [Хекслет](https://ru.hexlet.io/).
Цель проекта реализовать утилиту для поиска отличий в конфигурационных файлах. Возможности утилиты: поддержка разных форматов, генерация отчета в виде pretty, plain и json.

## Установка
```$ npm link```

## Вывод справки
```$ gendiff -h```

[![asciicast](https://asciinema.org/a/7rJVKTWPdoT9rbPb9TK0LgfHp.svg)](https://asciinema.org/a/7rJVKTWPdoT9rbPb9TK0LgfHp)

## Сравнение плоских файлов с расширением "json"

```$ gendiff <firstFile> <secondFile>```

[![asciicast](https://asciinema.org/a/rhD9q0SMsC7dsInEdO0svxcp2.svg)](https://asciinema.org/a/rhD9q0SMsC7dsInEdO0svxcp2)

## Сравнение плоских файлов с расширением "yml"

```$ gendiff <firstFile> <secondFile>```

[![asciicast](https://asciinema.org/a/rceNPT2iiDxs8YbMLtUbcfsfn.svg)](https://asciinema.org/a/rceNPT2iiDxs8YbMLtUbcfsfn)

## Сравнение плоских файлов с расширением "ini"

```$ gendiff <firstFile> <secondFile>```

[![asciicast](https://asciinema.org/a/qLC7ff53sOp1emXRv3HwywMg7.svg)](https://asciinema.org/a/qLC7ff53sOp1emXRv3HwywMg7)

## Сравнение файлов с вложенной структурой в формате "pretty"

```$ gendiff <firstFile> <secondFile>```

[![asciicast](https://asciinema.org/a/BxmkPOlYfjTksVhni1xUq4BUO.svg)](https://asciinema.org/a/BxmkPOlYfjTksVhni1xUq4BUO)

## Сравнение файлов с вложенной структурой в формате "plain"

```$ gendiff -f plain <firstFile> <secondFile>```

[![asciicast](https://asciinema.org/a/7BOhk7FoBwjm6iDyJh7rMFZzO.svg)](https://asciinema.org/a/7BOhk7FoBwjm6iDyJh7rMFZzO)

## Сравнение файлов с вложенной структурой в формате "json"

```$ gendiff -f json <firstFile> <secondFile>```

[![asciicast](https://asciinema.org/a/GiQIWcF6FMR4FoyE14ysql0gS.svg)](https://asciinema.org/a/GiQIWcF6FMR4FoyE14ysql0gS)
