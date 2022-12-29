import { formattedDateTimeString } from "../utils/date";

export const mapWalletData = (userData, transactions = []) => {
  const activityCodeMap = {
    ACPP: 'Plan Purchased',
    ACPC: 'Plan Cancelled',
    ACCU: 'Amount Credited to Wallet by You',
    ACCR: 'Amount Credited to Wallet by Referal',
    ACCO: 'Amount Credited to Wallet by Coupon',
    ACCP: 'Amount Credited to Wallet by Payout',
    ACAW: 'Amount Withdrawn',
    ACCB: 'Bonus Credited to Wallet',
    ACPU: 'Amount Credited to Waallet for Plan Upgrade'
  };
  return {
    metaData: {
      title: 'Wallet | Growpital'
    },
    topSection: {
      topText: 'My Wallet',
      userFullName: userData?.full_name || '•••',
      bottomText: 'This is where all your transactions happen'
    },
    mainSection: {
      firstCard: {
        walletBalance: userData?.wallet_amount || '0',
        cardBorder: '1px solid #6993ff',
        cardBackground: '#86a8ff',
        inputLabel: 'Enter Your Amount'
      },
      virtualAccountDetails: {
        title: "Your Growpital wallet details",
        description: "Add Payee to your account as per below mentioned details.",
        orText: "Or do a UPI transfer to below address",
        virtualAccountIfsc: userData?.virtual_account_ifsc,
        virtualAccountIfscTitle: "Account IFSC code",
        virtualAccountNumber: userData?.virtual_account_number,
        virtualAccountNumberTitle: "Account Number",
        virtualUpi: userData?.virtual_account_vpa,
        virtualUpiTitle: "UPI Address",
        transferText: "Please transfer the amount to below account",
        virtualAccountExists: !!(userData?.virtual_account_ifsc && userData?.virtual_account_number && userData?.virtual_account_vpa),
        noVirtualAccountText: "Please create virtual account go to \"Profile > Virtual Account\"",
        virtualAccountHolderNameTitle: "Account Holder Name",
        virtualAccountHolderName: userData?.full_name
      },
      paymentGatewayDetails: {
        title: "Via online payment",
        description: "Any descriptions of the online payment or conditions",
        buttonText: "Pay via payment gateway",
        maxAllowedAmount: 100000
      },
      withdraw: {
        rowLabels: ['Source', 'date', 'amount', 'activity', 'type'],
        rows: transactions?.sort?.((a, b) => (new Date(b.created_at)).getTime() - (new Date(a.created_at)).getTime())?.map?.(transaction => {
          return {
            cells: [
              { value: transaction?.source?.toUpperCase?.() },
              { value: transaction?.created_at ? formattedDateTimeString(transaction?.created_at) : '' },
              { value: `₹${parseInt(transaction?.amount).toLocaleString('en-IN') ?? '₹0'}` },
              { value: activityCodeMap[transaction?.activity_code] },
              { value: transaction?.payment_type?.toUpperCase?.() }
            ]
          }
        }),
      }
    }
  }
}
