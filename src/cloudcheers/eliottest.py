import eliot
import sys

eliot.to_file(sys.stdout)


def test():
    eliot.log_message(message_type="test", value="start", another=1)
    print('step1')
    eliot.log_message(message_type="test", value="end", another=2)


if __name__ == '__main__':
    test()
