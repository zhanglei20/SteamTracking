function BSubmitNewAccount( sPublisherName )
{
	sAccountName = document.getElementById( 'accountname' ).value;
	sRealName = document.getElementById( 'realname' ).value;
	sEmail = document.getElementById( 'emailaddr' ).value;

	if(!sAccountName)
	{
		alert('Please enter a Steam account name.');
		return false;
	}
	if(!sRealName)
	{
		alert('Please enter the User\'s full name.');
		return false;
	}
	if(!sEmail)
	{
		alert('Please enter a valid email address.');
		return false;
	}

	sConfirmTxt = 'Are you sure you want to add account ' + sAccountName + ' to ' + sPublisherName + '?';
	return confirm(sConfirmTxt);
}

function BSubmitNewGroup( sPublisherName )
{
	sGroupName = document.getElementById( 'groupname' ).value;
	sConfirmTxt = 'Are you sure you want to add a new group called "' + sGroupName + '" to ' + sPublisherName + '?';
	return confirm(sConfirmTxt);
}

function BVerifyGroupDelete( sGroupName )
{
	sConfirmTxt = 'Are you sure you want to delete the group called "' + sGroupName + '"?';
	return confirm(sConfirmTxt);
}

function BVerifyAccountDelete( sAccountName, sPublisherName )
{
	return confirm( 'Are you sure you want to remove ' + sAccountName + ' from ' + sPublisherName + '?' );
}

// Validate data and submit form for new publisher autogrant
function BSubmitNewAutogrant( sPublisherName )
{
	unPackageID = document.getElementById( 'packageid' ).value;

	sConfirmTxt = 'Are you sure you want all users from ' + sPublisherName +' to own package ' + unPackageID + '?';
	return confirm(sConfirmTxt);
}

function BVerifyAutograntDelete( unPackageID, sPublisherName )
{
	return confirm( 'Are you sure you want to remove licenses for ' + unPackageID + ' for users from ' + sPublisherName + '?' );
}

function BVerifyPromote( sAccountName, sPublisherName )
{
	return confirm( 'Are you sure you want to allow Steam user ' + sAccountName + ' to manage users in ' + sPublisherName + '?' );
}

function BVerifyDemote( sAccountName, sPublisherName )
{
	return confirm( 'Are you sure you want to remove Steam user ' + sAccountName + '\'s ability to manage users in ' + sPublisherName + '?' );
}

function SubmitPrices()
{

	if( g_bHasPricingWarnings && !$J('#pricewarningcheck').prop( "checked" ) )
	{
		ShowAlertDialog( "Pricing error", "You must confirm you have reviewed all pricing warnings before submitting these prices" );
		return;
	}

	if( g_bHasRaisedPrices && !confirm( "You are raising your price on one or more packages. This will prevent you from setting a discount or participating in any sales with these packages for %1$s days. Do you want to continue?".replace('%1$s',30)) )
		return;

	ShowConfirmDialog("Submit Prices?", "Are you sure you want to submit these prices?").done( function()
	{
		$J('#submitbutton').hide();
		var rgForms = $J('.proposal_form');
		g_strErrors = '';

		for ( var i = 0; i < rgForms.length; i += g_nBatchSize )
		{
			var rgBatch = rgForms.slice(i, i + g_nBatchSize);
			var strdata = $J(rgBatch).serialize();

			$J.ajax({
				url: 'https://partner.steamgames.com/packages/proposemultipleprices/',
				data: strdata + '&sessionid=' + g_sessionID,
				type: 'POST',
				dataType: 'json'
			}).done(function (result)
			{
				g_nBatchesFinished++;
				g_nBatchesWorking--;
				if( result.errors.length > 0 )
					g_strErrors += result.errors.join("<br>") + "<br>";
			}).fail(function(){
				g_strErrors += "Batch submission failed." + "<br>";
				g_nBatchesWorking--;
			});

			g_nBatchesWorking++;
		}
		g_modalWorking = ShowDialog('Processing', 'Submitting Prices...');
		setTimeout(CheckFinished, 100);
	});
}

function CheckFinished()
{
	if( g_nBatchesWorking == 0 )
	{
		g_modalWorking.Dismiss();

		var strRespone = 'Finished submitting prices.';
		if( g_strErrors )
			strRespone += "<br><br>Errors:<br>" + g_strErrors;

		ShowAlertDialog( 'Price Submission Complete', strRespone );
	}
	else
	{
		setTimeout( CheckFinished, 100 );
	}
}

