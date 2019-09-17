def minion_game(astring):
    vowels = 'AEIOU'
    string_length = len(astring)
    kevin_score = 0
    stuart_score = 0
    for index in range(string_length):
        if astring[index] in vowels:
            kevin_score += (string_length - index)
        else:
            stuart_score += (string_length - index)

    if kevin_score > stuart_score:
        print("Kevin", kevin_score)
    elif kevin_score < stuart_score:
        print("Stuart", stuart_score)
    else:
        print("Draw")
        
def main():
    minion_game('BANANA')

if __name__ == "__main__":
    main()