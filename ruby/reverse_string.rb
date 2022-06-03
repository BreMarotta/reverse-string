def reverse_string(str)
  new_str = ''
  i = 0
  while i < str.length
    new_str = str[i] + new_str
    i += 1
  end
  new_str
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  puts 

  puts "Expecting: 'ocnarf'"
  puts "=>", reverse_string('franco')

  puts "Expecting: 'nairb-oekin'"
  puts "=>", reverse_string('nikeo-brian')

  puts "Expecting: ''"
  puts "=>", reverse_string('')

  # Don't forget to add your own!
end

# Pseudocode:
  # assign a new variable new_str = ''
  # iterate through provided str and add each letter to new_str in reverse order
  # puts new_str
# And a written explanation of your solution