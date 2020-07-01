Technical Overview
===================

.. note: some of this is untrue as of yet, but what will, for planning purposes

When development is complete and all components needed for a set of studies
exist, an :term:`instance` of the platform should be deployed.


A :term:`scientist` who wants to run a :term:`study` will create an account on
 that :term:`instance` and log in to their account.
The scientist will choose what type of experiment for the given study and then
set the parameters that the experiment requires as required for the specific
hypotheses of the current study.

The scientist will interact with a configuration app that has a react frontend
and a flask backend. The flask part will import a package that defines the types
of experiments and integrate with the MongoDB.

The Experiment package will implement a class for each type of experiment that
has methods needed to collect necessary scientist selected parameters,
compute the needed values to generate the display for the participant, and store
those to the MongoDB. Each class will also contain methods to read from the
retrieved json to pass it to the frontend.

When the study is configured ....(qualtrics stuff)

The participant will interact with FIXME:app2, based on the custom URL that
directs them to the right configuration for the app. They will enter their unique
identifier and then be presented with the interactive questions as needed.


Item Types
----------------

**Normal Curves**
for questions about groupwise comparisons
control: slider that controls how much two curves overlap, next button
parameters: variances, labeling (group names, text for axis of comparison)
records: amount of overlap(or two locations, to compute later)

**Fairness metric tradeoff**
for tradeoffs between competing metrics
control: slider to move decision boundary according to optimizing for one or
another metric, next button
parameters: ROC?/ tbd, labeling
records: preferred location of tradeoff


**Static Information**
for added information between prompts
control: next button
paramters: text and images or link to video to embed
records: nothing


Experiment formats
---------------

- 1 interactive item
- interactive item, static, interactive


Study Formats
--------------------

- qualtrics surveys + single interactive experiment for all subjects
- qualtrics surveys + 2 interactive experiments to which subjects are randomzied



Instance Contents
-----------------

Within a given instance, multiple scientists may run multiple studies of
varying or repeating experiment types. The experiment types available within an
instance cannot be changed or extended. An instance contains a single database
with multiple collections.

Access
-------

Across two instances, a scientist would need to maintain separate logins. After
logging in, a scientist can view all of the studies that they have configured.
A research admin or PI can login to an instance and see all of the data from all
studies on an instance as the individual scientist can.
