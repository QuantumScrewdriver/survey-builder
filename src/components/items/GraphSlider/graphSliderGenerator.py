import json

output = {}
lines = int(input("How many lines are represented? "))
# minX = int(input("What is the minimum x-value of the graph?"))

for line in range(1, lines + 1):
    output[line - 1] = {}
    color = input(f'What is the color of line {line}? ')
    output[line - 1]['color'] = color
    points = int(input(f'How many points are in line {line}? '))
    output[line - 1]['points'] = points
    for point in range(1, points + 1):
        output[line - 1][point - 1] = {}
        xCoor = int(input(f'What is the x-coordinate of point {point} (integer between 0 and 300, inclusive)? '))
        yCoor = int(input(f'What is the y-coordinate of point {point} (integer between 0 and 300, inclusive)? '))
        output[line - 1][point - 1]['x'] = xCoor
        output[line - 1][point - 1]['y'] = yCoor

with open('output.json', 'w') as outfile:
    json.dump(output, outfile)