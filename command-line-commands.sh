#! /bin/bash

# Run this to see everybody/hosts on the network for the subnet
nmap -sP 1.2.3.0/24

# TCP SYN Scan, aint nobody tripping over this
sudo nmap -sS 1.2.3.0/24

# Show everything with as many details
sudo nmap -O 1.2.3.0/24

# Show active network connections on local machine
netstat -untap

# Find a file in the home directory
find ~/ -type f -name "postgis-2.0.0"
