/*

FrontVar    = total Front End Products
TTLVar      = Tag, License and Registration
FLDocVar    = Flat Doc Stamps
InvTaxVar   = Inventory Tax
DeFeeVar    = Dealer Doc Fee
CashVar     = Cash Down Payment
TradeVar    = Net Trade
RebateVar   = Rebate
SPVar       = Seles Price
STVar       = Sales Tax

*/

var output =
  SPVar +
  STVar +
  FrontVar +
  TTLVar +
  FLDocVar +
  InvTaxVar +
  DeFeeVar -
  (CashVar + TradeVar + RebateVar);

var result = output;
