[![Build Status](https://travis-ci.com/1ocke/frontend-project-lvl2.svg?branch=master)](https://travis-ci.com/1ocke/frontend-project-lvl2)
[![Maintainability](https://api.codeclimate.com/v1/badges/bd780c263f070201781e/maintainability)](https://codeclimate.com/github/1ocke/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bd780c263f070201781e/test_coverage)](https://codeclimate.com/github/1ocke/frontend-project-lvl2/test_coverage)

# Вычислитель отличий by hexlet

Проект выполнен в рамках прохождения профессии "Фронтенд JavaScript" на сайте [Хекслет](https://ru.hexlet.io/).
Цель проекта реализовать утилиту для поиска отличий в конфигурационных файлах. Возможности утилиты: поддержка разных форматов, генерация отчета в виде plain text, pretty и json.

**Установка**
```$ npm link```

**Вызов справки**
```$ gendiff -h```

[![asciicast](https://asciinema.org/a/7rJVKTWPdoT9rbPb9TK0LgfHp.svg)](https://asciinema.org/a/7rJVKTWPdoT9rbPb9TK0LgfHp)

## Сравнение плоских файлов в формате json

```$ gendiff <firstFile> <secondFile>```

[![asciicast](https://asciinema.org/a/rhD9q0SMsC7dsInEdO0svxcp2.svg)](https://asciinema.org/a/rhD9q0SMsC7dsInEdO0svxcp2)

## Сравнение плоских файлов в формате yaml

```$ gendiff <firstFile> <secondFile>```

[![asciicast](https://asciinema.org/a/rceNPT2iiDxs8YbMLtUbcfsfn.svg)](https://asciinema.org/a/rceNPT2iiDxs8YbMLtUbcfsfn)

## Сравнение плоских файлов в формате ini

```$ gendiff <firstFile> <secondFile>```

[![asciicast](https://asciinema.org/a/qLC7ff53sOp1emXRv3HwywMg7.svg)](https://asciinema.org/a/qLC7ff53sOp1emXRv3HwywMg7)

## Сравнение файлов, имеющих вложенную структуру

```$ gendiff <firstFile> <secondFile>```

[![asciicast](https://asciinema.org/a/BxmkPOlYfjTksVhni1xUq4BUO.svg)](https://asciinema.org/a/BxmkPOlYfjTksVhni1xUq4BUO)

## Сравнение файлов, имеющих вложенную структуру, в формате "Plain"

[![asciicast](https://asciinema.org/a/7BOhk7FoBwjm6iDyJh7rMFZzO.svg)](https://asciinema.org/a/7BOhk7FoBwjm6iDyJh7rMFZzO)