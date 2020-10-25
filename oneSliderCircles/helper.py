import json
def rearrested(arr1, arr2):
    finalArr = []
    num = 0
    denom = 0
    for j in range(len(arr1)):
        num = num + arr1[j]
        denom = denom + arr2[j] + arr1[j]
        finalArr.append(100*num/denom)
    finalArr.append(100)
    return finalArr

def needlesslyArrested(arr1,arr2):
    finalArr = [0]
    num = 0
    denom = 0
    j = len(arr1) -1
    while j > -1:
        num = num + arr1[j]
        denom = denom + arr2[j] + arr1[j]
        finalArr.append(100*num/denom)
        j = j - 1
    return finalArr
def main():
    width = int(input("Please enter the width of your graph (700 reccomended)"))
    height = int(input("Please enter the height of your graph (500 reccommended"))
    colNum = int(input("Please enter the number of column groups (e.g., for compas scores, 10)"))
    colWidth = width/colNum
    dotNum = int(input("Please enter the number of dots you want in each row of each column (3-5 is recommended)"))
    r = 10
    midLine = height/2
    
    firstPopBottom = []
    for a in range(colNum):
        firstPopBottom.append(int(input("Please enter the number of population 1 category 1 dots column # " + str(a))))
    print(firstPopBottom)
    firstPopTrueCol = input("Please enter the desired color for this group (should be in #------ format")
    firstPopTrueOp = input("Please enter the desired opacity for this group (0-1 inclusive)")
    firstPopTrueFIll = input("Please enter the fill color (should be in #------ format or 'none'")

    firstPopTop = []
    for b in range(colNum):
        firstPopTop.append(int(input("Please enter the number of population 1 category 2 dots for column #" + str(b))))
    firstPopFalseCol = input("Please enter the desired color for this group (should be in #------ format")
    firstPopFalseOp = input("Please enter the desired opacity for this group (0-1 inclusive)")
    firstPopFalseFIll = input("Please enter the fill color (should be in #------ format or 'none'")


    secondPopBottom = []
    for c in range(colNum):
        secondPopBottom.append(int(input("Please enter the number of population 2 category 1 dots for column #" + str(c))))
    print(secondPopBottom)
    secondPopTrueCol = input("Please enter the desired color for this group (should be in #------ format")
    secondPopTrueOp = input("Please enter the desired opacity for this group (0-1 inclusive)")
    secondPopTrueFIll = input("Please enter the fill color (should be in #------ format or 'none'")


    secondPopTop = []
    for d in range(colNum):
        secondPopTop.append(int(input("Please enter the number of population 2 category 2 dots for column #" + str(d))))
    secondPopFalseCol = input("Please enter the desired color for this group (should be in #------ format")
    secondPopFalseOp = input("Please enter the desired opacity for this group (0-1 inclusive)")
    secondPopFalseFIll = input("Please enter the fill color (should be in #------ format or 'none'")


    arr = []
    totalCount = []
    xPos1 = []
    yPos1 = []
    xPos2 = []
    xPos3 = []
    yPos2 = []
    yPos3 = []
    xPos4 = []
    yPos4 = []
    for i in range(colNum):
        count = 0
        for j in range(firstPopBottom[i]):
            d ={}
            xPos1.append(width*(i)/colNum + 5 + (r + 1) * (count % dotNum))
            yPos1.append(midLine - 15 - (r+1) * (count // dotNum))
            d["op"] = firstPopTrueOp
            d['col'] = firstPopTrueFIll
            d["stroke"] = firstPopTrueCol
            print(d)
            print(',')
            count = count + 1
        totalCount.append(count)
    
    for i in range(colNum):
        count = totalCount[i]
        for j in range(firstPopTop[i]):
            d ={}
            xPos2.append(width*(i)/(colNum) + 5 + (r + 1) * (count % dotNum))
            yPos2.append(midLine - 15 - (r+1) * (count// dotNum))
            d["op"] = firstPopFalseOp
            d["col"] = firstPopFalseFIll
            d["stroke"] = firstPopFalseCol
            print(d)
            print(',')
            count = count + 1

    totalCount = []
    for i in range(colNum):
        count = 0
        for j in range(secondPopBottom[i]):
            d ={}
            xPos3.append(width*(i)/colNum + 5 + (r + 1) * (count % dotNum))
            yPos3.append(midLine + 30 + (r+1) * (count // dotNum))
            d["op"] = secondPopTrueOp
            d["col"] = secondPopTrueFIll
            d["stroke"] = secondPopTrueCol
            print(d)
            print(',')
            count = count + 1
        totalCount.append(count)
    
    for i in range(colNum):
        count = totalCount[i]
        for j in range(secondPopTop[i]):
            d ={}
            xPos4.append(width*(i)/colNum + 5 + (r + 1) * (count % dotNum))
            yPos4.append(midLine + 30 + (r+1) * (count // dotNum))
            d["op"] = secondPopFalseOp
            d["col"] = secondPopFalseFIll
            d["stroke"] = secondPopFalseCol
            print(d)
            print(',')
            count = count + 1    
    legendKey = []
    for i in range(4):
        legendKey.append(input("Please enter the " + i+"th legend entry (from top to bottom)"))
    d = {}
    d["xPos1"] = xPos1
    d["xPos2"] = xPos2
    d["xPos3"] = xPos3
    d["xPos4"] = xPos4
    d["yPos1"] = yPos1
    d["yPos2"] = yPos2
    d["yPos3"] = yPos3
    d["yPos4"] = yPos4
    d["stroke1"] = firstPopTrueCol
    d["fill1"] = firstPopTrueFIll
    d["stroke2"] = firstPopFalseCol
    d["fill2"] = firstPopFalseFIll
    d["stroke3"] = secondPopTrueCol
    d["fill3"] = secondPopTrueFIll
    d["stroke4"] = secondPopTrueCol
    d["fill4"] = secondPopTrueFIll
    d["height"] = height
    d["width"] = width
    d["circRad"] = r
    d["displayArr1"] = 
    d["displayArr2"] = 
    d["displayArr4"] = 
    d["displayArr3"] = 
    arr5 = []
    for i in range(colNum):
        arr5.append("Please enter the " + i + "th display value of the array (these are displayed between the two columns")
    d["displayArr5"] = arr5
    d["legendKey"] = legendKey
    d["maxVal"] = len(displayArr1)

    with open('data.json', 'w') as outfile:
        json.dump(d, outfile)

main()






