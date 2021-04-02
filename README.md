# VPN-calculator

Calculator that computes the estimated cost of a VPN based on the inputed number of users, devices, and remote networks that may be needed. Estimated prices are also provided based on which tier would best suit your company (for example, if you will need more than 1 remote network, the AWS price will be for Accelerated Site-to-Site VPN Connection).

## Notes

Certain assumptions have been made with this calculator:
- In an average day, 1000 GB of data is transferred in by each worker
- 5000 GB is also transferred out by each worker
- Each worker works about 22 work days
- The VPN will run only during work hours (an 8-hour window)

If your scenario does not fit the above case, the estimated price for AWS will not be as accurate.

Additionally, it may be the case that your scenario would require a custom pricing, which is not provided by this calculator.

## Terminology
- user: how many clients, employees, etc will be using the VPN
- device: how many systems (mobile, laptop, computer, etc) that a user can use with the VPN
- remote networks: where you want your VPN to be situated for (**ex**: you want your site in Maryland to be located in Europe would require 2 networks)

**Note: Calculator has not been optimized for mobile or ultra-wide screen view.**
