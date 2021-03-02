a=$1
cp large_address_book.csv $a
sed -i 's/{//g' $a
sed -i 's/[a-zA-Z0-9], / /g' $a
sed -i 's/),/) /g' $a
sed -i  "s/) 'b/),'b/g" $a
sed -i  "s/)  'b/),'b/g" $a
 

