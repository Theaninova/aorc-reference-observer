const themeMap = {
  cherry: [0, 1, 2, 3],
  finland: [4, 9, 10, 11, 12, 13, 14],
  sardinia: [5, 15, 16, 17, 18, 19, 20],
  nasu: [6, 21, 22, 23, 24, 25, 26],
  norway: [7, 27, 28, 29, 30, 31, 32],
  hockweiler: [8, 33, 34, 35, 36, 37, 38],
  kenya: [39, 40, 41, 42, 43, 44, 45],
}

export const contextualThemeMap = Object.entries(themeMap).reduce((accumulator, [theme, index]) => {
  index.forEach(i => {
    accumulator[i] = theme
  })
  return accumulator
}, {} as Record<number, string>)
