def most_frequent(channels):
    return max(set(channels), key=channels.count)
