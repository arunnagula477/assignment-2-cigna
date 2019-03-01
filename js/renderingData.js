const cardsContainerEl = $('#cards-content'),
sectionContainerEl = $('#sections-content');

function renderCard(record) {
	const cardEl = $('<div>', {
		class: 'card border-dark h-100'
		
	}),
	cardBody = $('<div>', {
		class: 'card-body'
	}),
	cardFooter =$('<div>', {
		class: 'card-footer d-flex justify-content-between',
		html:`<span>UserId: ${record.userId}</span>
		<span class="badge badge-primary">Id: ${record.id}</span>`
	})
	titleEl = $('<h4>', {
		class: 'card-title',
		text: record.title
	}),
	contentEl = $('<p>', {
		class: 'card-text',
		html: record.body
	}),
	cardColumn = $('<div>', {
		class: 'col col-sm-6 col-md-4 col-lg-3'
	});
	
	
	cardBody
	.append(titleEl)
	.append(contentEl);
	cardEl
	.append(cardBody)
	.append(cardFooter);
	cardColumn.append(cardEl);
	cardsContainerEl
	.append(cardColumn);
}

function renderSection(record) {
	const cardEl = $('<div>', {
		class: 'card mb-3'
		
	}),
	cardHeader = $('<h2>', {
		class:'card-header',
		html: `${record.title} <span class="badge badge-info">${record.id}</span>`
	})
	cardBody = $('<div>', {
		class: 'card-body'
	}),
	titleEl = $('<h4>', {
		class: 'card-title',
		text: record.title
	}),
	contentEl = $('<p>', {
		class: 'card-text',
		text: record.body
	}),
	
	cardBody
	.append(titleEl)
	.append(contentEl);
	
	cardEl
	.append(cardHeader)
	.append(cardBody);
	
	sectionContainerEl
	.append(cardEl);
}
function renderingData(records) {
	const recordsLength = records.length;
	for(let i=0; i < recordsLength; i++) {
		renderSection(records[i]);
		renderCard(records[i]);

	}
}

$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: "GET",
    dataType : "json",
})
  .done(function( data ) {
    renderingData(data);
  })
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  });
  // Code to run regardless of success or failure;
  /*.always(function( xhr, status ) {
    alert( "The request is complete!" );
  });*/
